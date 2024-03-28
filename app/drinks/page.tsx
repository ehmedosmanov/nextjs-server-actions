import DrinksList from "@/components/DrinksList";

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a';

const fetchData = async () => {
    const res = await fetch(url)
    const data = res.json()
    if (!res.ok) throw new Error('Failed')
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return data
}


const DrinksPage = async () => {
    const data = await fetchData()
    return (
        <div className="ml-2">
            <h1 className='text-6xl py-4 font-bold'>Drinks Page</h1>
            <DrinksList drinks={data.drinks} />
        </div>
    )
}

export default DrinksPage
