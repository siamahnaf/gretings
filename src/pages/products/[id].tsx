import { GetServerSideProps } from "next";

//Components
import Detail from "@/Components/SingleProduct/Detail";

//Query
import { QueryClient, dehydrate } from "@tanstack/react-query";
import { GET_SINGLE_PRODUCT } from "@/Query/Function/product.query";

const SingleProduct = () => {
    return (
        <div className="xl:container xl:mx-auto px-12 py-10">
            <Detail />
        </div>
    );
};

export default SingleProduct;


export const getServerSideProps: GetServerSideProps = async (ctx) => {
    //Initialize Function
    const queryClient = new QueryClient();

    //Fetching Data
    await queryClient.prefetchQuery({ queryKey: ["product", ctx.query.id], queryFn: () => GET_SINGLE_PRODUCT(ctx.query.id as string) });

    return {
        props: { dehydratedState: dehydrate(queryClient) }
    }
}