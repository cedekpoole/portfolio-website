import { groq } from "next-sanity";
import { client } from "./client";

const query = groq`
    *[_type=='post'] {
        ...,
    } | order(projectNumber desc)`;

export const projects = await client.fetch(query);

export const revalidate = 60; // revalidate every 60 seconds