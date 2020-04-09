import React from "react";
import CollectionItem from "../collection-item";

const items = [
  {
    title: "The satin collection",
    image:
      "https://ideal-production.imgix.net/2020/02/19200510/LavenderSatin_PistachioSatin_RoseSatin_Group_TheSatinCollection-2_1440x2400.png?w=160&auto=format&fit=clip&fm=jpg",
  },
  ,
  {
    title: "Leonie Hanne x iDeal",
    image:
      "https://ideal-production.imgix.net/2020/01/14095408/34_LeonieFinal5_2700x2160.png?w=160&auto=format&fit=clip&fm=jpg",
  },
  {
    title: "Valentine's collection",
    image:
      "https://ideal-production.imgix.net/2020/01/28092820/16_RoseSatin-1_2160x2700.png?w=160&auto=format&fit=clip&fm=jpg",
  },
  {
    title: "Winter luxe collection",
    image:
      "https://ideal-production.imgix.net/2019/12/04144002/27_191111_Romina_5_0148.png?w=160&auto=format&fit=clip&fm=jpg",
  },
  {
    title: "Untamed the collection",
    image:
      "https://ideal-production.imgix.net/2019/10/21150211/17_IdealAnimal30896_V1.png?w=160&auto=format&fit=clip&fm=jpg",
  },
  {
    title: "The satin collection",
    image:
      "https://ideal-production.imgix.net/2020/02/19200510/LavenderSatin_PistachioSatin_RoseSatin_Group_TheSatinCollection-2_1440x2400.png?w=160&auto=format&fit=clip&fm=jpg",
  },
  ,
  {
    title: "Leonie Hanne x iDeal",
    image:
      "https://ideal-production.imgix.net/2020/01/14095408/34_LeonieFinal5_2700x2160.png?w=160&auto=format&fit=clip&fm=jpg",
  },
  {
    title: "Valentine's collection",
    image:
      "https://ideal-production.imgix.net/2020/01/28092820/16_RoseSatin-1_2160x2700.png?w=160&auto=format&fit=clip&fm=jpg",
  },
  {
    title: "Winter luxe collection",
    image:
      "https://ideal-production.imgix.net/2019/12/04144002/27_191111_Romina_5_0148.png?w=160&auto=format&fit=clip&fm=jpg",
  },
  {
    title: "Untamed the collection",
    image:
      "https://ideal-production.imgix.net/2019/10/21150211/17_IdealAnimal30896_V1.png?w=160&auto=format&fit=clip&fm=jpg",
  },
  {
    title: "The satin collection",
    image:
      "https://ideal-production.imgix.net/2020/02/19200510/LavenderSatin_PistachioSatin_RoseSatin_Group_TheSatinCollection-2_1440x2400.png?w=160&auto=format&fit=clip&fm=jpg",
  },
  ,
  {
    title: "Leonie Hanne x iDeal",
    image:
      "https://ideal-production.imgix.net/2020/01/14095408/34_LeonieFinal5_2700x2160.png?w=160&auto=format&fit=clip&fm=jpg",
  },
  {
    title: "Valentine's collection",
    image:
      "https://ideal-production.imgix.net/2020/01/28092820/16_RoseSatin-1_2160x2700.png?w=160&auto=format&fit=clip&fm=jpg",
  },
  {
    title: "Winter luxe collection",
    image:
      "https://ideal-production.imgix.net/2019/12/04144002/27_191111_Romina_5_0148.png?w=160&auto=format&fit=clip&fm=jpg",
  },
  {
    title: "Untamed the collection",
    image:
      "https://ideal-production.imgix.net/2019/10/21150211/17_IdealAnimal30896_V1.png?w=160&auto=format&fit=clip&fm=jpg",
  },
  {
    title: "The satin collection",
    image:
      "https://ideal-production.imgix.net/2020/02/19200510/LavenderSatin_PistachioSatin_RoseSatin_Group_TheSatinCollection-2_1440x2400.png?w=160&auto=format&fit=clip&fm=jpg",
  },
  ,
  {
    title: "Leonie Hanne x iDeal",
    image:
      "https://ideal-production.imgix.net/2020/01/14095408/34_LeonieFinal5_2700x2160.png?w=160&auto=format&fit=clip&fm=jpg",
  },
  {
    title: "Valentine's collection",
    image:
      "https://ideal-production.imgix.net/2020/01/28092820/16_RoseSatin-1_2160x2700.png?w=160&auto=format&fit=clip&fm=jpg",
  },
  {
    title: "Winter luxe collection",
    image:
      "https://ideal-production.imgix.net/2019/12/04144002/27_191111_Romina_5_0148.png?w=160&auto=format&fit=clip&fm=jpg",
  },
  {
    title: "Untamed the collection",
    image:
      "https://ideal-production.imgix.net/2019/10/21150211/17_IdealAnimal30896_V1.png?w=160&auto=format&fit=clip&fm=jpg",
  },
];

export default function CollectionList() {
  return (
    <div className="w-full max-w-4xl mx-auto text-center">
      <h3 className="text-base font-semibold mb-6 uppercase">
        All Collections
      </h3>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(10, 1fr)",
          gap: "1rem",
        }}
      >
        {items
          .sort(() => Math.random() - 0.5)
          .map((item) => (
            <CollectionItem
              key={item.title}
              title={item.title}
              image={item.image}
            />
          ))}
      </div>
    </div>
  );
}
