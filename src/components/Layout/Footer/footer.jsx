import React from "react";

import { createStyles, Container, Group, ActionIcon } from "@mantine/core";
import {
  IconBrandTwitter,
  IconBrandYoutube,
  IconBrandInstagram,
} from "@tabler/icons";

const useStyles = createStyles((theme) => ({
  footer: {
    backgroundColor: "rgb(32, 10, 10)",
    marginTop: 120,
    borderTop: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  inner: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,

    [theme.fn.smallerThan("xs")]: {
      flexDirection: "column",
    },
  },

  links: {
    [theme.fn.smallerThan("xs")]: {
      marginTop: theme.spacing.md,
    },
  },
}));

const Footer = () => {
  const { classes } = useStyles();
  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <h1
          style={{
            padding: "0 20px",
            fontFamily:
              "system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif",
            letterSpacing: "-2px",
            transform: "scale(0.7, 1.6)",
            backgroundColor: "red",
            color: "white",
          }}>
          MARVEL
        </h1>

        <Group spacing={0} className={classes.links} position="right" noWrap>
          <ActionIcon size="lg">
            <IconBrandTwitter size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg">
            <IconBrandYoutube size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg">
            <IconBrandInstagram size={18} stroke={1.5} />
          </ActionIcon>
        </Group>
      </Container>
    </div>
  );
};

export default Footer;
