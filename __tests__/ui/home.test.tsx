import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { expect, test, describe } from "@jest/globals";
import Page from "../../app/(pages)/(website)/(home)/page";

describe("Testing home UI: Unit testing", () => {
  test("test the homepage", () => {
    //Arrange
    render(<Page />);

    //Act
    const heading = screen.getByRole("heading", {
      name: "home",
    });

    //Assert
    expect(heading).toBeDefined();
  });
});
