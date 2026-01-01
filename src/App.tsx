import {
  ArrowUpIcon,
  ChevronDown,
  Search,
  SearchIcon,
  ShieldAlertIcon,
} from "lucide-react";
import "./App.css";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "./components/ui/input-group";
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import FileInputGroup from "@/components/ui/file-input-group";
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemSeparator,
  ItemTitle,
} from "./components/ui/item";
const music = [
  {
    title: "Midnight City Lights",
    artist: "Neon Dreams",
    album: "Electric Nights",
    duration: "3:45",
  },
  {
    title: "Coffee Shop Conversations",
    artist: "The Morning Brew",
    album: "Urban Stories",
    duration: "4:05",
  },
  {
    title: "Digital Rain",
    artist: "Cyber Symphony",
    album: "Binary Beats",
    duration: "3:30",
  },
];

function App() {
  return (
    <>
      <div className="p-5 my-10">
        <h1 className=" text-lg">Vite + React</h1>
        <Button size="sm" rounded="sm">
          <ArrowUpIcon />
          check out
        </Button>
        <Button size="default" rounded="sm">
          <ArrowUpIcon />
          check out
        </Button>
        <Button size="lg" rounded="sm">
          <ArrowUpIcon />
          check out
        </Button>
        <div className="flex gap-6">
          <Button variant="outline">
            <ArrowUpIcon />
          </Button>
          <Button variant="outline" size="icon">
            <ArrowUpIcon />
          </Button>
          <Button variant="default" size="icon-xl" rounded="xl">
            <ArrowUpIcon />
          </Button>
        </div>
        <div className="flex flex-col gap-3">
          <Input type="email" placeholder="email" />

          <InputGroup>
            <InputGroupInput placeholder="Search..." />
            <InputGroupAddon>
              <SearchIcon />
            </InputGroupAddon>
          </InputGroup>
          {/* file */}
          <FileInputGroup />

          <Field>
            <FieldLabel htmlFor="email">Email*</FieldLabel>
            <Input id="email" type="email" placeholder="email" />
            <FieldDescription>
              We will never share your email with anyone else
            </FieldDescription>
          </Field>

          <InputGroup>
            <InputGroupInput placeholder="Search" />

            <InputGroupButton variant="default" size="icon-sm">
              <Search />
            </InputGroupButton>
          </InputGroup>

          <InputGroup>
            <InputGroupInput placeholder="Your Email" />
            <InputGroupButton variant="default" size="sm">
              Subscribe
            </InputGroupButton>
          </InputGroup>

          <InputGroup>
            <InputGroupInput placeholder="Search" />
            <div className="order-last flex">
              <InputGroupButton
                variant="ghost"
                size="sm"
                className="border-l border-input-group-border"
              >
                Category
                <ChevronDown />
              </InputGroupButton>
              <InputGroupButton variant="default" size="icon-sm">
                <Search />
              </InputGroupButton>
            </div>
          </InputGroup>

          <InputGroup>
            <FileInputGroup />
            <InputGroupButton variant="default" size="sm">
              go
            </InputGroupButton>
          </InputGroup>

          {/* widget items */}
          <ItemGroup>
            {music.map((song, index) => (
              <>
                <Item key={song.title} asChild role="listitem">
                  <a href="#">
                    <ItemMedia>
                      <ShieldAlertIcon />
                    </ItemMedia>
                    <ItemContent>
                      <ItemDescription>
                        Williamsburg carles vegan helvetica.
                      </ItemDescription>
                    </ItemContent>
                  </a>
                </Item>
                {index !== music.length - 1 && <ItemSeparator />}
              </>
            ))}
          </ItemGroup>

          <ItemGroup>
            <Item asChild role="listitem" size="lg">
              <a href="#">
                <ItemContent>
                  <ItemTitle className="line-clamp-1">
                    List group item heading
                  </ItemTitle>
                  <ItemDescription>
                    Raw denim you probably haven't heard of them jean shorts
                    Austin. Nesciunt tofu stumptown aliqua, retro synth master
                    cleanse. Mustache cliche tempor, williamsburg carles vegan
                    helvetica. Reprehenderit butcher retro keffiyeh dreamcat
                    cher synth. Cosby sweater eu banh mi
                  </ItemDescription>
                </ItemContent>

                <ItemMedia variant="icon">3 days ago</ItemMedia>
              </a>
            </Item>
            <ItemSeparator />
            <Item asChild role="listitem" size="lg">
              <a href="#">
                <ItemContent>
                  <ItemTitle className="line-clamp-1">
                    List group item heading
                  </ItemTitle>
                  <ItemDescription>
                    Raw denim you probably haven't heard of them jean shorts
                    Austin. Nesciunt tofu stumptown aliqua, retro synth master
                    cleanse. Mustache cliche tempor, williamsburg carles vegan
                    helvetica. Reprehenderit butcher retro keffiyeh dreamcat
                    cher synth. Cosby sweater eu banh mi
                  </ItemDescription>
                </ItemContent>

                <ItemMedia variant="icon">2 days ago</ItemMedia>
              </a>
            </Item>
          </ItemGroup>

          <ItemGroup>
            <Item asChild role="listitem">
              <a href="#">
                <ItemContent>
                  <ItemDescription>
                    Raw denim you probably haven't heard
                  </ItemDescription>
                </ItemContent>

                <ItemMedia variant="icon">22</ItemMedia>
              </a>
            </Item>
            <Item asChild role="listitem">
              <a href="#">
                <ItemContent>
                  <ItemDescription>Reprehenderit butcher retro</ItemDescription>
                </ItemContent>

                <ItemMedia variant="icon">33</ItemMedia>
              </a>
            </Item>
          </ItemGroup>
        </div>
      </div>
    </>
  );
}

export default App;
