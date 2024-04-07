export type MenuItem = {
    Text: string;
  };
  
  export   type MenuSection = {
    sectionName: string;
    menuItems: MenuItem[];
  };
  
export type Menu = {
    Items: MenuSection[];
  };
  
/*************************************/

export type groceryListSublist = {
  aisle: string;
  groceries: groceryItem[]
}

export type groceryList = {
  items: groceryListSublist[]
}

export type avatarDefinition = {
  type: string;
  source?: string;
  code?: string;
}

export type groceryItem = {
  name: string;
  quantity: string;
  avatar: avatarDefinition;
  status: number;
  lastBought?: string //date??
}


