import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useSignIn } from "../hooks/services/useSignin";

const validationSchema = Yup.object({
  username: Yup.string()
    .min(3, "Username must be at least 3 characters")
    .required("Username is required"),

  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

export default function SigninForm() {
  const { mutate, isPending } = useSignIn();

  return (
    <div className="w-4xl max-sm:w-2xl p-6 bg-white shadow rounded-lg">
      <h2 className="text-2xl font-bold mb-6">Sign in to your account</h2>

      <Formik
        initialValues={{
          username: "",
          password: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          mutate(values, {
            onSuccess: () => {
              resetForm();
            },
          });
        }}
      >
        <Form className="flex flex-col gap-5">
          <div>
            <label className="block mb-1 font-medium">Username</label>
            <Field
              name="username"
              type="text"
              className="w-full border rounded p-2"
            />
            <ErrorMessage
              name="username"
              component="p"
              className="text-red-500 text-sm"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Password</label>
            <Field
              name="password"
              type="password"
              className="w-full border rounded p-2"
            />
            <ErrorMessage
              name="password"
              component="p"
              className="text-red-500 text-sm"
            />
          </div>

          <button
            type="submit"
            disabled={isPending}
            className="bg-black text-white py-2 rounded disabled:opacity-50"
          >
            {isPending ? "Signing In..." : "Sign In"}
          </button>
        </Form>
      </Formik>
    </div>
  );
}
