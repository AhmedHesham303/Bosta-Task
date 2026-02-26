import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useCreateProduct } from "../hooks/services/useCreateProduct";
import { useGetCategories } from "@/features/display/hooks/services/useGetCategories";
import { useGetProducts } from "@/features/display/hooks/services/useGetProducts";

const validationSchema = Yup.object({
  title: Yup.string().required("Title is required"),
  description: Yup.string().required("Description is required"),
  price: Yup.number()
    .typeError("Price must be a number")
    .positive("Price must be positive")
    .required("Price is required"),
  category: Yup.string().required("Category is required"),
  image: Yup.string()
    .url("Must be a valid URL")
    .required("Image URL is required"),
});

export default function CreateProductForm() {
  const { data } = useGetProducts();
  const total = data?.total;
  let id = 0;
  if (total) id = total + 1;
  const { mutate, isPending } = useCreateProduct();
  const { data: categories = [] } = useGetCategories();

  return (
    <div className="max-w-4xl mx-auto  p-6 bg-white shadow rounded-lg">
      <h2 className="text-2xl font-bold mb-6">Create Product</h2>

      <Formik
        initialValues={{
          title: "",
          description: "",
          price: "",
          category: "",
          image: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          mutate(
            {
              id: id,
              title: values.title,
              price: values.price,
              description: values.description,
              category: values.category,
              image: values.image,
            },
            {
              onSuccess: () => {
                resetForm();
              },
            },
          );
        }}
      >
        <Form className="flex flex-col gap-5">
          <div>
            <label className="block mb-1 font-medium">Title</label>
            <Field
              name="title"
              type="text"
              className="w-full border rounded p-2"
            />
            <ErrorMessage
              name="title"
              component="p"
              className="text-red-500 text-sm"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Description</label>
            <Field
              as="textarea"
              name="description"
              rows={4}
              className="w-full border rounded p-2"
            />
            <ErrorMessage
              name="description"
              component="p"
              className="text-red-500 text-sm"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Price</label>
            <Field
              name="price"
              type="number"
              className="w-full border rounded p-2"
            />
            <ErrorMessage
              name="price"
              component="p"
              className="text-red-500 text-sm"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Category</label>
            <Field
              as="select"
              name="category"
              className="w-full border rounded p-2"
            >
              <option value="">Select Category</option>
              {categories.map((cat: string) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </Field>
            <ErrorMessage
              name="category"
              component="p"
              className="text-red-500 text-sm"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Image URL</label>
            <Field
              name="image"
              type="text"
              className="w-full border rounded p-2"
            />
            <ErrorMessage
              name="image"
              component="p"
              className="text-red-500 text-sm"
            />
          </div>

          <button
            type="submit"
            disabled={isPending}
            className="bg-black text-white py-2 rounded disabled:opacity-50"
          >
            {isPending ? "Creating..." : "Create Product"}
          </button>
        </Form>
      </Formik>
    </div>
  );
}
