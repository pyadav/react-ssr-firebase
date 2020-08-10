import * as functions from "firebase-functions";
import React from "react";
import { renderToString } from "react-dom/server";
import fs from "fs";

import App from "./src/App";
import express from "express";

const index = fs.readFileSync(__dirname + "/index.html", "utf8");
const app = express();

app.get("**", (req, res) => {
    const { name = "Praveen" } = req.query;
    const html = renderToString(<App name={name} />);
    res.set("Cache-Control", "public, max-age=600, s-maxage=1200");

    res.send(finalHtml);
});

export let ssrapp = functions.https.onRequest(app);
