import BrandNav from "@/components/BrandNav";

export default function ClothingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ minHeight: "100dvh", backgroundColor: "#0B0B09" }}>
      <BrandNav
        brand="CONFLUENCE CLOTHING"
        accent="#C8BFA8"
        links={[
          { label: "Collection", href: "/clothing/collection" },
          { label: "Lookbook", href: "/clothing/lookbook" },
          { label: "Shop", href: "/clothing/shop" },
        ]}
      />
      {children}
    </div>
  );
}
