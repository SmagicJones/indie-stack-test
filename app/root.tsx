import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction, LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import Nav from "./components/Nav";
import Burger from "./components/Burger";
import Aside from "./components/Aside";

import Layout from "./components/Layout";

import { getUser } from "~/session.server";
import stylesheet from "~/tailwind.css";
import styles from "./styles/style.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
  { rel: "stylesheet", href: styles },

  // ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];

export const loader = async ({ request }: LoaderFunctionArgs) => {
  return json({ user: await getUser(request) });
};

export default function App() {
  return (
    <html lang="en" className="h-full">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="h-full">
        {/* <div>
          <Outlet />
        </div> */}

        <section className="pt-20">
          <div className="grid grid-col-1">
            <div className="bg-slate-500 rounded-xl p-4 m-2">
              <Nav />
              <Burger />
              <Aside />
              <Layout>
                <Outlet />
              </Layout>
            </div>
          </div>
        </section>

        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
