import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const fetchData = async (id: string) => {
    const res = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
    const data = res.json()
    if (!res.ok) throw new Error('Failed')
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return data
}



const DrinkDetail = async ({ params }: {
    params: {
        id: string
    }
}) => {
    const data = await fetchData(params.id)
    const title = data?.drinks[0]?.strDrink;
    const imgSrc = data?.drinks[0]?.strDrinkThumb;

    return (
        <div className="ml-2">
            <h1 className="font-bold text-3xl mb-4">{title}</h1>
            <Image
                src={imgSrc}
                width={300}
                height={300}
                className='w-48 h-48 rounded shadow-lg mb-4'
                priority
                alt=''
            />
            <Button >
                <Link href='/drinks' className='btn btn-primary'>
                    back to drinks
                </Link>
            </Button>
        </div>
    )
}

export default DrinkDetail
