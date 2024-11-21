export type CardProps = {
  imageUrl: string;
  name: string;
};

export default function Card({ imageUrl, name }: CardProps) {
  return (
    <div className="border-radius-lg overflow-hidden ">
      <img
        className="w-full h-fill object-cover"
        src={imageUrl}
        alt={name}
      ></img>
    </div>
  );
}
