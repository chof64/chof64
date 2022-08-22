import LayoutGlobal from "../components/LayoutGlobal";
import Layout from "../components/alpha/Layout";
import Image from "next/image";

function Index() {
  const socialLinks = [
    { name: "GitHub", href: "https://github.com/chof64" },
    { name: "Polywork", href: "https://polywork.chadfernandez.me" },
  ];

  return (
    <div>
      
    </div>
  );
}

Index.getLayout = function getLayout(page) {
  return (
    <LayoutGlobal>
      <Layout>{page}</Layout>
    </LayoutGlobal>
  );
};

export default Index;
