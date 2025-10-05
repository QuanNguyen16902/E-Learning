"use client";
import { EButton } from "@/@shared/components/ui/e-button";
import { ECard } from "@/@shared/components/ui/e-card";
import { ECheckbox } from "@/@shared/components/ui/e-checkbox";
import { EChevron } from "@/@shared/components/ui/e-chevron";
import { EDropdown } from "@/@shared/components/ui/e-dropdown";
import { EInput } from "@/@shared/components/ui/e-input";
import { ELabel } from "@/@shared/components/ui/e-label";
import { EProductCard } from "@/@shared/components/ui/e-product-card";
import { ERadio } from "@/@shared/components/ui/e-radio";
import { EToggle } from "@/@shared/components/ui/e-toggle";
import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [dropdownValue, setDropdownValue] = useState("");
  const [selectValue, setSelectValue] = useState("");
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const [radioValue, setRadioValue] = useState("option1");
  const [toggleChecked, setToggleChecked] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-yellow-100 to-blue-100 p-8">
      <ECard className="w-full max-w-md space-y-4">
        {/* Name Input */}
        <ELabel htmlFor="name">Your Name</ELabel>
        <EInput
          id="name"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        {/* Select Role */}
        <ELabel htmlFor="role">Select Role</ELabel>
        <EDropdown
          id="role"
          options={[
            { value: "student", label: "Student" },
            { value: "teacher", label: "Teacher" },
          ]}
          value={selectValue}
        />

        {/* Dropdown */}
        <ELabel htmlFor="dropdown">Dropdown Example</ELabel>
        <EDropdown
        
          label="Choose option"
          options={[
            { value: "opt1", label: "Option 1" },
            { value: "opt2", label: "Option 2" },
          ]}
          value={dropdownValue}
          onChange={setDropdownValue}
        />

        {/* Checkbox */}
        <ECheckbox
          label="Accept Terms"
          checked={checkboxChecked}
          onChange={setCheckboxChecked}
        />

        {/* Radio Buttons */}
        <div className="flex gap-4">
          <ERadio
            name="radioGroup"
            label="Option 1"
            value="option1"
            checked={radioValue === "option1"}
            onChange={setRadioValue}
          />
          <ERadio
            name="radioGroup"
            label="Option 2"
            value="option2"
            checked={radioValue === "option2"}
            onChange={setRadioValue}
          />    
        </div>

        {/* Toggle */}
        <div className="flex items-center gap-2">
          <EToggle
            checked={toggleChecked}
            onChange={setToggleChecked}
          />
          <span className="text-sm">{toggleChecked ? "On" : "Off"}</span>
        </div>

        {/* Submit Button */}
        <EButton variant="primary" size="sm" className="w-1/2">
          Submit
        </EButton>
        <EChevron direction="down" size={24} color="#1E40AF" />
    <EProductCard
    imageSrc="/assets/images/ai-data.png"
    imageAlt="AI & Data Science"
    badge="Most Popular"
    title="AI & Data Science Degree"
    category={{ label: "Technology", onClick: () => console.log("go technology") }}
    description="Master the foundations of artificial intelligence and data analysis, and earn a globally recognized degree."
    tags={[
        { id: "py", label: "Python" },
        { id: "ml", label: "Machine Learning" },
        { id: "viz", label: "Data Visualization" },
    ]}
    href="#"
    />

      </ECard>
      
    </div>
  );
}
