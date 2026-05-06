export default function Skill({ title, level }) {
    const maxLevel = 5;
    const percentage = (level / maxLevel) * 100;

    return (
        <div className="flex flex-col space-y-2">
            <h3 className="text-lg font-medium text-gray-800">{title}</h3>
            <div className="w-full bg-gray-300 rounded-full h-4">
                {
                    <div
                        className="bg-blue-500 h-4 rounded-full"
                        style={{ width: `${percentage}%` }}
                    ></div>
                }
            </div>
        </div>
    );
}