"use client";
const Announcements = () => {
  return (
    <div className="bg-white p-4 rounded-md">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Announcements</h1>
        <span className="text-xs text-gray-400">View All</span>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        <div className="bg-adaSkyLight rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Lorem ipsum dolor sit amet</h2>
            <span className="text-sm rounded-md bg-white text-gray-400 px-1 py-1">
              2023-14-11
            </span>
          </div>
          <p className="text-sm text-gray-400 mt-1">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor
            dolorum.
          </p>
        </div>
        <div className="bg-adaPurpleLight rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Lorem ipsum dolor sit amet</h2>
            <span className="text-sm rounded-md bg-white text-gray-400 px-1 py-1">
              2023-14-11
            </span>
          </div>
          <p className="text-sm text-gray-400 mt-1">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor
            dolorum.
          </p>
        </div>
        <div className="bg-adaYellowLight rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Lorem ipsum dolor sit amet</h2>
            <span className="text-sm rounded-md bg-white text-gray-400 px-1 py-1">
              2023-14-11
            </span>
          </div>
          <p className="text-sm text-gray-400 mt-1">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor
            dolorum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Announcements;
