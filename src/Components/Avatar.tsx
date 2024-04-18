interface AvatarProps {
  authorname?: string;
  size: string;
}

export function Avatar({ authorname = "user", size = "large" }: AvatarProps) {
  return (
    <div
      className={`relative inline-flex items-center justify-center ${
        size === "small" ? "w-6 h-6" : "w-8 h-8"
      }  overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600`}
    >
      <span
        className={`font-medium text-gray-600 dark:text-gray-300 *
      ${size === "small" ? "text-xs" : "text-base"} 
      `}
      >
        {authorname ? authorname[0].toUpperCase() : "U"}
      </span>

     
    </div>
  );
}
