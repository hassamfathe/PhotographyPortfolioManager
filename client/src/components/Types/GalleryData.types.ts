
export interface ShootSlot {
  shootTitle: string;
  shootDetails: string;
  shootImages: string[];
}

export interface GalleryDataType {
  [key: string]: ShootSlot[]; 
  wedding: ShootSlot[];
  event: ShootSlot[];
  auto: ShootSlot[];
  outdoor:ShootSlot[];
  nature:ShootSlot[];
}