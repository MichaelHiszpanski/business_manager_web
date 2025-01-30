interface NavigationItem {
  hrefLink: string;
  name: string;
}

export const navigationItems: NavigationItem[] = [
  { hrefLink: "/", name: "Home" },
  { hrefLink: "/docs", name: "Docs" },
  { hrefLink: "/about", name: "About" },
];
