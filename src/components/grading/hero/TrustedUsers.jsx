import React from "react";
import { CheckCircle2 } from "lucide-react";

const users = [
  "/avatars/avatar-1.jpg",
  "/avatars/avatar-2.jpg",
  "/avatars/avatar-3.jpg",
  "/avatars/avatar-4.jpg",
];

const TrustedUsers = () => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-5">

      {/* Avatar Stack */}

      <div className="flex -space-x-4">

        {users.map((user, index) => (
          <div
            key={index}
            className="
              relative
              w-12
              h-12
              rounded-full
              border-4
              border-white
              overflow-hidden
              shadow-lg
              transition-all
              duration-300
              hover:-translate-y-1
              hover:z-20
            "
          >
            <img
              src={user}
              alt={`User ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}

        {/* +100 */}

        <div
          className="
            w-12
            h-12
            rounded-full
            bg-primary
            text-white
            border-4
            border-white
            shadow-lg
            flex
            items-center
            justify-center
            font-semibold
            text-sm
          "
        >
          +100
        </div>

      </div>

      {/* Text */}

      <div>

        <div className="flex items-center gap-2">

          <CheckCircle2
            size={18}
            className="text-primary"
          />

          <p className="text-sm text-slate-500">
            Trusted by
          </p>

        </div>

        <h4
          className="
            mt-1
            text-base
            font-bold
            text-slate-900
          "
        >
          Farmers, Buyers & Institutions
        </h4>

      </div>

    </div>
  );
};

export default TrustedUsers;