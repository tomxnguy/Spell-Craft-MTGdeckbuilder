export type CardProps = {
  imageUrl: string;
  name: string;
};

export default function Card({ imageUrl, name }: CardProps) {
  return (
    <div className="cursor-pointer border-radius-lg overflow-hidden ">
      <img
        className="w-full h-fill object-cover"
        src={imageUrl}
        alt={name}
      ></img>
    </div>
  );
}
