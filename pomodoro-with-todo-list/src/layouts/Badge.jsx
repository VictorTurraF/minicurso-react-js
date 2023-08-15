import { styled } from "@stitches/react";
import { schema } from "../configs/theme";

export const Badge = styled('span', {
  padding: '.25rem .5rem',
  fontSize: '.75rem',
  color: '#fff',
  borderRadius: '.25rem',

  variants: {
    variant: {
      primary: {
        background: schema.primary,
      },
      secondary: {
        background: schema.secondary, // Replace with your secondary color value
      },
    },
  },

  defaultVariants: {
    variant: 'primary', // Set the default variant to primary
  },
});
