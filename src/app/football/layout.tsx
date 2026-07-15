import BrandNav from "@/components/BrandNav";

export default function FootballLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ minHeight: "100dvh", backgroundColor: "#090E05" }}>
      <BrandNav
        brand="CONFLUENCE FC"
        accent="#B6FF00"
        links={[
          { label: "Squad", href: "/football/squad" },
          { label: "Fixtures", href: "/football/fixtures" },
          { label: "News", href: "/football/news" },
        ]}
      />
      {children}
    </div>
  );
}
