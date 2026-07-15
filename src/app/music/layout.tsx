import BrandNav from "@/components/BrandNav";

export default function MusicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ minHeight: "100dvh", backgroundColor: "#0E0505" }}>
      <BrandNav
        brand="CONFLUENCE MUSIC"
        accent="#E8302A"
        links={[
          { label: "Releases", href: "/music/releases" },
          { label: "Artists", href: "/music/artists" },
          { label: "Events", href: "/music/events" },
        ]}
      />
      {children}
    </div>
  );
}
