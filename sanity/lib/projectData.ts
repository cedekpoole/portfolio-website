import { groq } from "next-sanity";
import { client } from "./client";

export const runtime = 'edge'; 
const query = groq`
    *[_type=='post'] {
        ...,
    } | order(projectNumber desc)`;

export const projects = await client.fetch(query);