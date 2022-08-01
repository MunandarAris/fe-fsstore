import Banner from "components/organisms/HomePage/Banner";
import Categories from "components/organisms/HomePage/Categories";
import Layout from "components/organisms/HomePage/Layout";
import Promotion from "components/organisms/HomePage/Promotion";
import Products from "components/organisms/HomePage/Products";

export default function HomePage() {
  return (
    <>
      <Layout transparent={false}>
        {/* --- banner --- */}
        <Banner />
        {/* --- end banner --- */}

        {/* --- categories --- */}
        <Categories />
        {/* --- end categories --- */}

        {/* --- promotion --- */}
        <Promotion />
        {/* --- end promotion --- */}

        {/* --- products --- */}
        <Products />
        {/* --- end products --- */}
      </Layout>
    </>
  );
}
