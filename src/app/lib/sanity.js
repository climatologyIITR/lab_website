import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { buildFileUrl } from "@sanity/asset-utils";

export const client = createClient({
    apiVersion: "2022-03-07",
    dataset: "production",
    projectId: "h21gifi8",
    useCdn: false,
});

const builder = imageUrlBuilder(client);

export function urlFor(source) {
    return builder.image(source);
}

export function fileUrl(source) {
    // Check if source is in the expected format
    if (typeof source !== 'object' || !('asset' in source)) {
        // If not, create the expected structure manually
        source = {
            _type: 'file',
            asset: {
                _ref: source,
            }
        };
    }

    return buildFileUrl(source, {
        projectId: client.config().projectId,
        dataset: client.config().dataset,
    });
}
