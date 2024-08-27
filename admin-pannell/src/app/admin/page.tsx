"use client";
import SidebarSearchLayout from "./_adminComponents/SidebarSearchLayout";
import StatsDisplayer from "./_adminComponents/StatSectionComponents/StatsDisplayer";
import StatSectionBox from "./_adminComponents/StatSectionComponents/StatSectionBox";
import StatSectionTitle from "./_adminComponents/StatSectionComponents/StatSectionTitle";
import Sales from "public/colorfulIcons/Sales.svg";
import Revenue from "public/colorfulIcons/Revenue.svg";
import Profit from "public/colorfulIcons/Profit.svg";
import Cost from "public/colorfulIcons/Cost.svg";
import Quantity from "public/colorfulIcons/Quantity.svg";
import OnTheWay from "public/colorfulIcons/OnTheWay.svg";
import Purchase from "public/colorfulIcons/PurchaseBag.svg";
import Cancel from "public/colorfulIcons/Cancel.svg";
import Suppliers from "public/colorfulIcons/Suppliers.svg";
import Categories from "public/colorfulIcons/Categories.svg";
import { SidebarNavLinkListEnum } from "./_adminComponents/SidebarComponents/SideBarNavLinkList";

function page() {
  return (
    <SidebarSearchLayout active={SidebarNavLinkListEnum.Dashboard}>
      <div className="row grid h-full grid-cols-[4fr_2fr] grid-rows-[1fr_1fr_2fr_2fr] gap-[22px] px-8 py-[22px]">
        <StatSectionBox>
          <StatSectionTitle title="Sales Overview" />
          <StatsDisplayer
            textNumberPosition="row"
            stats={[
              {
                image: Sales,
                number: 832,
                text: "Sales",
                displayCurrency: true,
                backgroundColor: "#E8F1FD",
              },
              {
                image: Revenue,
                number: 18300,
                text: "Revenue",
                displayCurrency: true,
                backgroundColor: "#ECEAFF",
              },
              {
                image: Profit,
                number: 868,
                text: "Profit",
                displayCurrency: true,
                backgroundColor: "#FFEEDB",
              },
              {
                image: Cost,
                number: 17432,
                text: "Cost",
                displayCurrency: true,
                backgroundColor: "#EBFFED",
              },
            ]}
          />
        </StatSectionBox>
        <StatSectionBox>
          <StatSectionTitle title="Inventory Overview" />
          <StatsDisplayer
            stats={[
              {
                image: Quantity,
                number: 832,
                text: "Quantity in Hand",
                displayCurrency: false,
                backgroundColor: "#FFEEDB",
              },
              {
                image: OnTheWay,
                number: 200,
                text: "To be Received",
                displayCurrency: false,
                backgroundColor: "#ECEAFF",
              },
            ]}
            textNumberPosition="column"
          />
        </StatSectionBox>
        <StatSectionBox>
          <StatSectionTitle title="Purchase Overview" />
          <StatsDisplayer
            textNumberPosition="row"
            stats={[
              {
                image: Purchase,
                number: 82,
                text: "Purchase",
                displayCurrency: true,
                backgroundColor: "#E5F6FD",
              },
              {
                image: Cost,
                number: 13573,
                text: "Cost",
                displayCurrency: true,
                backgroundColor: "#EBFFED",
              },
              {
                image: Cancel,
                number: 5,
                text: "Cancel",
                displayCurrency: false,
                backgroundColor: "#E7E5FF",
              },
              {
                image: Profit,
                number: 17432,
                text: "Return",
                displayCurrency: true,
                backgroundColor: "#FFEEDB",
              },
            ]}
          />
        </StatSectionBox>
        <StatSectionBox>
          <StatSectionTitle title="Product Overview" />
          <StatsDisplayer
            stats={[
              {
                image: Suppliers,
                number: 31,
                text: "Number of Suppliers",
                displayCurrency: false,
                backgroundColor: "#E5F6FD",
              },
              {
                image: Categories,
                number: 21,
                text: "Number of Categories",
                displayCurrency: false,
                backgroundColor: "#ECEAFF",
              },
            ]}
            textNumberPosition="column"
          />
        </StatSectionBox>
        <StatSectionBox></StatSectionBox>
        <StatSectionBox></StatSectionBox>
        <StatSectionBox></StatSectionBox>
        <StatSectionBox></StatSectionBox>
      </div>
    </SidebarSearchLayout>
  );
}

export default page;
