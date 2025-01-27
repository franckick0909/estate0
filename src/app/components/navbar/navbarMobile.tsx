import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export const NavbarMobile = ({
  isOpen,
  user,
}: {
  isOpen: boolean;
  user: boolean;
}) => {
  const menuVariants = {
    open: {
      x: 0.5,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
        when: "beforeChildren",
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
    closed: {
      x: "100%",
      opacity: 0.5,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
        when: "afterChildren",
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  return (
    <motion.nav
      initial="closed"
      animate={isOpen ? "open" : "closed"}
      variants={menuVariants}
      className="fixed top-0 right-0 w-3/4 sm:w-3/4 h-full z-50 bg-white text-zinc-950"
    >
      <div className="flex flex-col justify-center items-center gap-4 h-full w-full px-6">
        <motion.div className="flex gap-4 flex-col items-start w-full">
          {user ? (
            <motion.div
              variants={{
                open: {
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.2,
                    ease: [0.76, 0, 0.24, 1],
                  },
                },
                closed: {
                  transition: { delayChildren: 0.2, ease: [0.76, 0, 0.24, 1] },
                },
              }}
              className="flex flex-col gap-2 w-full"
            >
              <motion.div
                variants={{
                  open: {
                    x: 0,
                    opacity: 1,
                    transition: {
                      type: "spring",
                      stiffness: 100,
                      damping: 20,
                    },
                  },
                  closed: {
                    x: 20,
                    opacity: 0,
                    transition: {
                      type: "spring",
                      stiffness: 100,
                      damping: 20,
                    },
                  },
                }}
                className="flex items-center gap-2"
              >
                <div className="w-12 h-12 rounded-full overflow-hidden shadow-md">
                  <Image
                    src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="user"
                    width={50}
                    height={50}
                    className="object-cover w-full h-full rounded-full"
                  />
                </div>
                <span className="text-sm md:text-base">Jane Doe</span>
              </motion.div>
              <div className="relative ">
                <Link
                  href="/profil"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 border border-violet-600 text-white bg-violet-600 rounded-md py-2 px-4 hover:bg-transparent hover:text-violet-600 transition-colors text-sm md:text-base"
                >
                  Profil
                </Link>
                <div className="absolute -top-1 -right-1 bg-rose-500 h-6 w-6 rounded-full flex items-center justify-center text-white text-xs">
                  3
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              variants={{
                open: {
                  x: 0,
                  opacity: 1,
                  transition: {
                    staggerDirection: 1,
                    staggerChildren: 0.2,
                    delayChildren: 0.2,
                    ease: [0.76, 0, 0.24, 1],
                  },
                },
                closed: {
                  x: 50,
                  opacity: 0,
                  transition: { delayChildren: 0.2, ease: [0.76, 0, 0.24, 1] },
                },
              }}
              className="flex flex-col gap-2 w-full"
            >
              <Link
                href="/"
                className="w-full sm:w-auto flex items-center justify-center gap-2 border border-violet-600 text-violet-600 rounded-md p-2 hover:bg-violet-600 hover:text-white transition-colors text-sm md:text-base"
              >
                Se connecter
              </Link>
              <Link
                href="/"
                className="w-full sm:w-auto flex items-center justify-center gap-2 border border-violet-600 text-white bg-violet-600 rounded-md p-2 hover:bg-transparent hover:text-violet-600 transition-colors text-sm md:text-base"
              >
                S&apos;inscrire
              </Link>
            </motion.div>
          )}
        </motion.div>

        <div className="flex gap-4 w-full">
          <motion.div
            className="flex gap-4 flex-col items-start w-full"
            variants={{
              open: {
                transition: { staggerChildren: 0.1 },
              },
            }}
          >
            {["Home", "About", "Contact", "Agents"].map((item) => (
              <motion.div
                className="w-full"
                key={item}
                variants={{
                  open: { y: 0, opacity: 1 },
                  closed: { y: 20, opacity: 0 },
                }}
              >
                <Link href="/" className="block">
                  {item}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
};
