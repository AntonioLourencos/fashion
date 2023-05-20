import { AvailableIcons } from "$store/components/ui/Icon.tsx";
import Icon from "$store/components/ui/Icon.tsx";

export type IconItem = { icon: AvailableIcons };
export type StringItem = {
  label: string;
  href: string;
};

export type Item = StringItem | IconItem;

export type Section = {
  label: string;
  children: Item[];
};

export interface Props {
  sections?: Section[];
}

const Columns = [
  {
    name: "Column one",
    links: ["Link one", "Link two", "Link three", "Link four", "Link five"],
  },
  {
    name: "Column two",
    links: ["Link one", "Link two", "Link three", "Link four", "Link five"],
  },
  {
    name: "Column three",
    links: ["Link one", "Link two", "Link three", "Link four", "Link five"],
  },
];

function Footer({ sections = [] }: Props) {
  return (
    <footer className="px-16 pt-20 pb-12">
      <div className="flex flex-row justify-between">
        <div className="flex flex-col gap-4">
          <span className="font-normal text-3xl">Subscribe</span>
          <span>Join our newsletter to stay up to date.</span>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex flex-row gap-4">
            <input
              placeholder="Enter your email"
              type="email"
              className="border border-solid py-2 px-4 w-80"
              style={{ borderColor: "#AAAAAA" }}
            />
            <button
              className="border border-solid text-base py-2 px-4"
              style={{ borderColor: "#546F4A", color: "#546F4A" }}
            >
              Subscribe
            </button>
          </div>

          <span>
            By subscribing you agree to with our{" "}
            <a className="underline cursor-pointer">Privacy Policy</a>.
          </span>
        </div>
      </div>

      <hr className="my-10" />

      <div className="flex flex-col gap-2 mb-10">
        <h1 className="text-xl font-black" style={{ letterSpacing: 7 }}>
          LOGO
        </h1>
        <span>Short description of the company</span>
      </div>

      <div className="flex flex-row justify-between">
        <div className="flex flex-row gap-24">
          {Columns.map((column) => {
            return (
              <ul className="flex flex-col gap-4">
                <span className="text-xl">{column.name}</span>

                {column.links.map((link) => {
                  return (
                    <li
                      className="text-sm font-normal"
                      style={{ color: "#292929" }}
                    >
                      {link}
                    </li>
                  );
                })}
              </ul>
            );
          })}
        </div>

        <div>
          <div>
            <span>Follow us</span>
            <div>
              <span>Icon</span>
            </div>
          </div>

          <div>
            <span>Payment Methods</span>
            <div>
              <span>Icon</span>
            </div>
          </div>
        </div>
      </div>

      <hr className="my-10" />

      <div className="flex flex-row justify-between">
        <div className="flex flex-row items-center gap-2">
          <span>powered by</span>
          <Icon size={48} id="Deco" strokeWidth={1} />
        </div>

        <div className="flex flex-row gap-4">
          <div
            className="flex flex-row items-center gap-2 border border-solid py-2 px-4 cursor-pointer"
            style={{ borderColor: "#AAAAAA" }}
          >
            <Icon
              className="translate-y-1"
              size={20}
              id="UnitedStates"
              strokeWidth={3}
            />
            <span>United states - USD</span>
            <Icon size={20} id="ChevronDown" strokeWidth={3} />
          </div>

          <div
            className="flex flex-row items-center gap-2 border border-solid py-2 px-4 cursor-pointer"
            style={{ borderColor: "#AAAAAA" }}
          >
            <Icon
              className="translate-y-1"
              size={22}
              id="WebSite"
              strokeWidth={3}
            />
            <span>EN</span>
            <Icon size={20} id="ChevronDown" strokeWidth={3} />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
