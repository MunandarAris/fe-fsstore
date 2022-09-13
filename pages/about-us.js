import Layout from "components/moleculs/Layout";
import Header from "components/organisms/AboutUs/Header";
import FAQ from "components/organisms/AboutUs/FAQ";
import StepeBuyingProduct from "components/organisms/AboutUs/StepeBuyingProduct";

export default function AboutUs() {
  return (
    <>
      <Layout>
        <main className="p-14">
          <div className="flex justify-between">
            <div className="w-5/12">
              {/* --- header --- */}
              <Header />
              {/* --- end header --- */}

              {/* --- faq --- */}
              <FAQ />
              {/* --- end faq --- */}
            </div>

            <div className="w-5/12">
              <StepeBuyingProduct />
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
}
