import { Edit, Trash } from "lucide-react";
import React, { FunctionComponent } from "react";

import { Button } from "components/ui/button";
import CreateAppointmentDialog from "app/barber-shop/[id]/components/create-appointment-dialog";
import UpdateServiceDialog from "./update-service-dialog";
import { formatCurrency } from "lib/utils";
import useDeleteService from "hooks/use-delete-service";

interface ServiceItemProps {
  name: string;
  price: number;
  id: number;
  isForClient: boolean;
  barberShopId: number;
}

const ServiceItem: FunctionComponent<ServiceItemProps> = ({
  name,
  price,
  id,
  isForClient,
  barberShopId,
}) => {
  const { mutate: delete_service } = useDeleteService();

  return (
    <div className="text-white p-5 border-l-4 shadow-lg flex items-center justify-between">
      <div>
        <span>{name}</span> | <span>{formatCurrency.format(price)}</span>
      </div>
      <div className="flex gap-2">
        {isForClient ? (
          <CreateAppointmentDialog barberShopId={barberShopId} />
        ) : (
          <>
            <UpdateServiceDialog serviceId={id} name={name} price={price} />
            <Button
              variant="secondary"
              size="icon"
              onClick={() => delete_service(id)}
            >
              <Trash className="h-4 w-4 text-destructive" />
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default ServiceItem;
