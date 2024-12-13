import CarDetail from "@/components/Car/CarDetail";

const page = async ({params}: {params: {carId: string}}) => {
    const {carId} = await params;
    console.log(carId)

  return (
    <div>
        <CarDetail carId={carId}/>
    </div>
  )
}

export default page