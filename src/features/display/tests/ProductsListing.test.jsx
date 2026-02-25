jest.mock("@/features/display/hooks/services/useGetProduct");
(useGetProducts as jest.mock).mockReturnValue({
  data: {
    products: [{ id: 1, title: "Shirt", price: 100 }],
    total: 1,
    pages: 1
  },
  isLoading: false,
  isError: false
})