import Image from "next/image";

const UserCard = ({ type }: { type: string }) => {
  return (
    <div className="rounded-2xl odd:bg-adaPinkLight even:bg-adaBlueLight flex-1 p-4 min-w-[130px]">
      <div>
        <span className="text-[10px] bg-white px-2 py-1 rounded-full text-green-600">
          2023/2024
        </span>
        <Image src="/more.png" alt="" width={20} height={20} />
      </div>
      <h1 className="text-2xl font-semibold my-4">3,455</h1>
      <h2 className="capitalize text-sm text-white">{type}</h2>
    </div>
  );
};

export default UserCard;
