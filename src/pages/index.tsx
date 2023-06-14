import { GetServerSideProps } from "next";

//Components
import Card from "@/Components/Products/Card";

//Query
import { QueryClient, dehydrate } from "@tanstack/react-query";
import { GET_PRODUCTS } from "@/Query/Function/product.query";

const Home = () => {
  return (
    <div className="xl:container xl:mx-auto px-12 py-10">
      <Card />
    </div>
  );
};

export default Home;



export const getServerSideProps: GetServerSideProps = async (ctx) => {
  //Initialize Function
  const queryClient = new QueryClient();

  //Fetching Data
  await queryClient.prefetchQuery({ queryKey: ["products"], queryFn: GET_PRODUCTS });

  return {
    props: { dehydratedState: dehydrate(queryClient) }
  }
}