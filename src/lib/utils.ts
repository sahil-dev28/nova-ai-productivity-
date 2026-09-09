import { createCn } from "cn/config";

export const cn = createCn({
  extend: {
    classGroups: {
      "font-size": [
        {
          text: [
            "h1",
            "h2",
            "h2-block",
            "h3",
            "lead",
            "body",
            "eyebrow",
            "stat",
            "price",
          ],
        },
      ],
    },
  },
});
