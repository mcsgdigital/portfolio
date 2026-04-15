export default function Skill({ title, level }) {
    const barWidth = 200;
    const maxLevel = 5;
    const calculatedWidth = (barWidth * (level / maxLevel)); // Calculate the width of the filled bar

    return (
        <div className="flex flex-col space-y-2">
            {/* Skill Title */}
            <h3 className="text-lg font-medium text-gray-800">{title}</h3>

            {/* Skill Bar */}
            <div className="w-full bg-gray-300 rounded-full h-4">
                <div
                    className="bg-blue-500 h-4 rounded-full"
                    style={{ width: `${calculatedWidth}px` }}
                ></div>
            </div>
        </div>
    );
}