import {
  fireEvent,
  render,
  waitFor,
  screen,
} from "@testing-library/react";
import HomePage from "../Pages/Home/HomePage";
import renderer from "react-test-renderer";
import React from "react";
import { vi } from "vitest";
import { mockData } from "../mock-data/mockData";
import { Pagination } from "../components";


describe("Snapshot testing suite", () => {
  it("Matches DOM Snapshot", () => {
    const domTree = renderer.create(<HomePage />).toJSON();
    expect(domTree).toMatchSnapshot();
  });
});


test("renders SearchComponent & select component", () => {
  render(<HomePage />);
  expect(screen.getByText("Github Explorer Repository")).toBeInTheDocument();
  expect(screen.getByLabelText("search")).toBeInTheDocument();
  expect(screen.getByRole("combobox")).toBeInTheDocument();
});

test("renders Select component and is disabled initially", () => {
  render(<HomePage />);
  const select = screen.getByRole("combobox");
  expect(select).toBeInTheDocument();
  expect(select).toBeDisabled();
});

test("changing sorting option updates state and re-renders", () => {
  render(<HomePage />);
  const select = screen.getByRole("combobox") as HTMLInputElement;
  fireEvent.change(select, { target: { value: "Last updated" } });
  expect(select.value).toBe("Last updated");
});



test("render data on search", async () => {
  vi.mock("fetch", () => ({
    ok: true,
    json: () =>
      Promise.resolve({
        success: true,
        status: 200,
        data: mockData,
      }),
  }));
  render(<HomePage />);
  fireEvent.change(screen.getByLabelText("search"), {
    target: { value: "ivey" },
  });

  const searchButton = screen.getByTestId("Search");
  fireEvent.click(searchButton);

  await waitFor(() => {
    const repoNameElement = screen.getByText("ivey.github.com");
    expect(repoNameElement).toBeInTheDocument();
  });
  const select = screen.getByRole("combobox") as HTMLInputElement;
  fireEvent.change(select, { target: { value: "Stars" } });
  expect(select.value).toBe("Stars");
  await waitFor(() => {
    const repoNameElement = screen.getByText("rss-to-notifo");
    expect(repoNameElement).toBeInTheDocument();
  });
});

test("render no data if no repository found", async () => {
  vi.mock("fetch", () => ({
    ok: true,
    json: () =>
      Promise.resolve({
        success: true,
        status: 200,
        data: mockData,
      }),
  }));
  render(<HomePage />);
  fireEvent.change(screen.getByLabelText("search"), {
    target: { value: "asd" },
  });

  const searchButton = screen.getByTestId("Search");
  fireEvent.click(searchButton);

  await waitFor(() => {
    const repoNameElement = screen.getByText("Repository not found");
    expect(repoNameElement).toBeInTheDocument();
  });
});

test("should render the pagination buttons ", () => {
  const onPageChangeMock = vi.fn();
  const component = render(
    <Pagination
      onPageChange={onPageChangeMock}
      totalCount={10}
      siblingCount={1}
      currentPage={1}
      pageSize={5}
    />
  );

  const previousButton = screen.queryByText("Previous");
  const nextButton = screen.queryByText("Next");

  expect(previousButton).toBeInTheDocument();
  expect(nextButton).toBeInTheDocument();

  // Find and click the "Next" button
  const nextButtonClick = screen.getByText("Next");
  fireEvent.click(nextButtonClick);

  expect(onPageChangeMock).toHaveBeenCalledWith(2);
});
