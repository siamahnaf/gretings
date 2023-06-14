import { Card, CardHeader, CardBody, CardFooter, Typography, Button } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";

//Query
import { useQuery } from "@tanstack/react-query";
import { GET_PRODUCTS } from "@/Query/Function/product.query";

const Cards = () => {
    //Query
    const { data } = useQuery({ queryKey: ["products"], queryFn: GET_PRODUCTS });

    return (
        <div className="grid grid-cols-5 gap-5">
            {data?.map((item, i) => (
                <Card className="mt-6 w-full" key={i}>
                    <Link href={`/products/${item.id}`}>
                        <CardHeader color="blue-gray" className="relative h-44">
                            <Image src={"https://fsfsdfsdfsdfsf.shop.mysharefox.com" + item.images[0].link} alt={item.name.en as string} width={400} height={300} className="w-full h-full object object-center" />
                        </CardHeader>
                        <CardBody>
                            <Typography variant="h5" color="blue-gray" className="mb-2">
                                {item.name.en}
                            </Typography>
                            <Typography>
                                ${item.price} {item.perDay ? " / per day" : ""}
                            </Typography>
                        </CardBody>
                    </Link>
                    <CardFooter className="pt-0">
                        <Button>Buy Now</Button>
                    </CardFooter>
                </Card>

            ))}
        </div>
    );
};

export default Cards;