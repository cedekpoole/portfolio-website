
type Base = {
    _createdAt: string;
    _id: string;
    _rev: string;
    _type: string;
    _updatedAt: string;
}

interface Project extends Base {
    description: string;
    mainImage: Image;
    title: string,
    slug: Slug
    github: string;
    liveProject: string;
}

interface Description {
    _type: "description";
    current: string;
}

interface Image {
    _type: "image";
    asset: Reference;
}

interface Reference {
    _ref: string;
    _type: "reference"
}

interface Span {
    _key: string;
    _type: "span";
    marks: string[];
    text: string;
}

interface mainImage {
    _type: "image";
    asset: Reference;
}

interface Title {
    _type: "string";
    current: string;
}