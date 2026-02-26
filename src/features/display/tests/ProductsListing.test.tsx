// // productlisting.test.tsx
// import { render, screen, fireEvent } from "@testing-library/react";
// import ProductListing from "./ProductListing";
// import { useGetProducts } from "@/features/display/hooks/services/useGetProducts";
// import { useNavigate } from "react-router";

// // Mock the hook
// jest.mock("@/features/display/hooks/services/useGetProducts");
// const mockedUseGetProducts = useGetProducts as jest.MockedFunction<typeof useGetProducts>;

// // Mock react-router navigate
// jest.mock("react-router", () => ({
//   useNavigate: jest.fn(),
// }));
// const mockedNavigate = useNavigate as jest.MockedFunction<typeof useNavigate>;

// describe("ProductListing", () => {
//   beforeEach(() => {
//     jest.clearAllMocks();
//   });

//   it("shows loading state initially", () => {
//     mockedUseGetProducts.mockReturnValue({
//       data: undefined,
//       isLoading: true,
//       isError: false,
//     });

//     render(<ProductListing />);

//     expect(screen.getByText(/loading/i)).toBeInTheDocument();
//   });

//   it("displays products when data is available", () => {
//     mockedUseGetProducts.mockReturnValue({
//       data: {
//         products: [
//           { id: 1, name: "Product A", price: 10, category: "Cat1", image: "imgA" },
//           { id: 2, name: "Product B", price: 20, category: "Cat2", image: "imgB" },
//         ],
//         total: 2,
//         pages: 1,
//       },
//       isLoading: false,
//       isError: false,
//     });

//     const mockNav = jest.fn();
//     mockedNavigate.mockReturnValue(mockNav as any);

//     render(<ProductListing />);

//     expect(screen.getByText("Product A")).toBeInTheDocument();
//     expect(screen.getByText("Product B")).toBeInTheDocument();

//     // Test "View Details" button
//     const viewButtons = screen.getAllByText(/view details/i);
//     fireEvent.click(viewButtons[0]);
//     expect(mockNav).toHaveBeenCalledWith("/products/1");
//   });

//   it("shows 'No products found' when list is empty", () => {
//     mockedUseGetProducts.mockReturnValue({
//       data: { products: [], total: 0, pages: 0 },
//       isLoading: false,
//       isError: false,
//     });

//     render(<ProductListing />);

//     expect(screen.getByText(/no products found/i)).toBeInTheDocument();
//   });

//   it("shows error message when API fails", () => {
//     mockedUseGetProducts.mockReturnValue({
//       data: undefined,
//       isLoading: false,
//       isError: true,
//     });

//     render(<ProductListing />);

//     expect(screen.getByText(/something went wrong/i)).toBeInTheDocument();
//   });
// });
