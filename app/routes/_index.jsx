import { Form } from "@remix-run/react";

import Burger from "../components/Burger";
import Aside from "../components/Aside";

export default function Index() {
  return (
    <>
      <section className="">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-slate-200 rounded-xl p-4">
            <h3>Hello</h3>
          </div>
          <div className="bg-slate-200 rounded-xl p-4">
            <h1>Bob</h1>
          </div>
        </div>
      </section>

      <Form action="/logout" method="post">
        <button
          type="submit"
          className="rounded bg-slate-600 px-4 py-2 text-blue-100 hover:bg-blue-500 active:bg-blue-600"
        >
          Logout
        </button>
      </Form>

      <section>
        <div className="grid grid-col-1">
          <div className="bg-slate-500 rounded-xl p-4 m-2">
            <Burger />
            <Aside />
          </div>
        </div>
      </section>
    </>
  );
}
