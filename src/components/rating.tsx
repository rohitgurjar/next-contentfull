interface ratingProps {
  data: any;
}

const Rating: React.FC<ratingProps> = async ({ data }) => {
  const RatingData = data.itemsCollection.items;
  return (
    <div className="bg-gradient-to-r from-[#fc0032] via-[#551bff] to-[#093eff] p-8">
      <div className="flex justify-between">
        {RatingData.map((item: any, index: number) => (
          <div key={index} className="text-center">
            <h3 className="text-lg font-semibold text-white">{item.title}</h3>
            <h3 className="text-white">{item.description}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rating;
