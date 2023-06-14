import { useRouter } from "next/router";
import Image from "next/image";


//Query
import { useQuery } from "@tanstack/react-query";
import { GET_SINGLE_PRODUCT } from "@/Query/Function/product.query";

const Detail = () => {
    //Initialize Hook
    const router = useRouter();

    //Query
    const { data } = useQuery({ queryKey: ["product", router.query.id], queryFn: () => GET_SINGLE_PRODUCT(router.query.id as string) });

    return (
        <div>
            <div className="grid grid-cols-2 gap-5">
                <div>
                    {data?.productGroup.images.map((item, i) => (
                        <Image src={"https://fsfsdfsdfsdfsf.shop.mysharefox.com" + item.link} alt={data.productGroup.name.en} width={500} height={500} className="w-full" />
                    ))}
                </div>
                <div>
                    <h3 className="text-3xl font-bold">{data?.productGroup.name.en}</h3>
                    <p className="text-xl font-medium mt-2 mb-5">{data?.productGroup.price} $ day</p>
                    <div>
                        <h5 className="font-bold text-base mb-3">Select Type:</h5>
                        <div className="grid grid-cols-3 gap-5">
                            {data?.variants.map((item, i) => (
                                <div key={i} className="border border-solid border-blue-gray-50 p-4 text-center">
                                    <Image src={"https://fsfsdfsdfsdfsf.shop.mysharefox.com" + item.images[0].link.replace("..", "")} alt="Image" width={400} height={400} />
                                    <p className="mt-3">{item.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="mt-5" dangerouslySetInnerHTML={{ __html: data?.productGroup.descriptionWeb.no as string }}></div>
                </div>
            </div>
        </div>
    );
};

export default Detail;