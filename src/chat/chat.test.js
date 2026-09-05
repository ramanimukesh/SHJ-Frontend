import React from "react";
import { MemoryRouter } from "react-router-dom";
import { render, fireEvent, wait, cleanup } from "@testing-library/react";

import { respond } from "./brain";
import { byKind, findEntry } from "./knowledge";
import ChatWidget from "../components/ui/ChatWidget";

const ask = (text) => respond([{ role: "user", text }]);

afterEach(() => {
  cleanup();
  window.sessionStorage.clear();
});

describe("knowledge index", () => {
  test("covers every kind from content.json", () => {
    expect(byKind("service")).toHaveLength(5);
    expect(byKind("industry").length).toBeGreaterThan(0);
    expect(byKind("technology").length).toBeGreaterThan(0);
  });

  test("longest phrase wins, so specific beats generic", () => {
    expect(findEntry(" react native ").slug).toBe("react-native");
    expect(findEntry(" react ").slug).toBe("react");
    expect(findEntry(" digital banking ").slug).toBe("digital-banking");
  });

  test("phrases match on word boundaries only", () => {
    // "app" is an alias for mobile — it must not fire inside "happens".
    expect(findEntry(" that happens a lot ")).toBeNull();
  });

  test("every entry links at a real route prefix", () => {
    for (const entry of [...byKind("service"), ...byKind("industry"), ...byKind("technology")]) {
      expect(entry.to).toMatch(/^\/(solutions|service|industries|technology)\/[a-z0-9-]+$/);
      expect(entry.description).toBeTruthy();
    }
  });
});

describe("brain", () => {
  test("lists services with a link per service", async () => {
    const answer = await ask("what services do you offer?");
    expect(answer.links).toHaveLength(5);
    expect(answer.links.every((l) => l.to.startsWith("/service/"))).toBe(true);
  });

  test("answers an entity question from real content", async () => {
    const answer = await ask("tell me about react native");
    expect(answer.text).toContain("React Native");
    expect(answer.links[0].to).toBe("/technology/react-native");
  });

  test("hands off to a human when asked, ahead of any other match", async () => {
    // Mentions a service too — handoff must still win.
    const answer = await ask("I'd like to talk to someone about mobile");
    expect(answer.links).toContainEqual({ label: "Open the contact form", to: "/contact" });
  });

  test("never invents a price", async () => {
    const answer = await ask("how much does a build cost?");
    expect(answer.text).not.toMatch(/\$|\d+\s*(k|usd|dollars)/i);
    expect(answer.links[0].to).toBe("/contact");
  });

  test("falls back with options rather than guessing", async () => {
    const answer = await ask("do you sell tractors");
    expect(answer.chips.length).toBeGreaterThan(0);
  });

  test("ignores a turn that is not from the user", async () => {
    expect(await respond([{ role: "bot", text: "hi" }])).toBeNull();
  });
});

describe("widget", () => {
  const open = () => {
    const utils = render(
      <MemoryRouter>
        <ChatWidget />
      </MemoryRouter>
    );
    fireEvent.click(utils.getByLabelText("Ask the STL assistant"));
    return utils;
  };

  test("stays closed until the launcher is clicked", () => {
    const { queryByRole, getByLabelText } = render(
      <MemoryRouter>
        <ChatWidget />
      </MemoryRouter>
    );
    expect(queryByRole("dialog")).toBeNull();
    fireEvent.click(getByLabelText("Ask the STL assistant"));
    expect(queryByRole("dialog")).not.toBeNull();
  });

  test("greets with suggestions and answers a typed question", async () => {
    const { getByLabelText, getByText, container } = open();

    expect(container.textContent).toContain("STL assistant");
    getByText("What services do you offer?");

    fireEvent.change(getByLabelText("Message the assistant"), {
      target: { value: "which industries do you work in?" },
    });
    fireEvent.click(getByLabelText("Send"));

    // The user's own turn is echoed immediately, before the reply lands.
    getByText("which industries do you work in?");

    await wait(() => {
      expect(container.textContent).toContain("industries we work in");
    });
  });

  test("a suggestion chip asks its own question", async () => {
    const { getByText, container } = open();

    fireEvent.click(getByText("I'd like to talk to someone"));

    await wait(() => {
      expect(container.textContent).toContain("contact form");
    });
    getByText("Open the contact form");
  });

  test("escape closes the panel", () => {
    const { queryByRole } = open();
    fireEvent.keyDown(window, { key: "Escape" });
    expect(queryByRole("dialog")).toBeNull();
  });

  test("start over drops the conversation back to the greeting", async () => {
    const { getByLabelText, getByText, container } = open();

    fireEvent.click(getByText("What services do you offer?"));
    await wait(() => expect(container.textContent).toContain("Ask about any one of them"));

    fireEvent.click(getByLabelText("Start over"));
    expect(container.textContent).not.toContain("Ask about any one of them");
    expect(container.textContent).toContain("I'm the STL assistant");
  });
});
