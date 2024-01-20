"use client";


import { Alert, AlertDescription, AlertTitle } from "components/ui/alert";

import { AlertCircle } from "lucide-react";
import { Button } from "components/ui/button";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import { BaseError } from "viem";

const styles = {
  form: "space-y-1 min-w-[400px] mt-5 flex flex-col gap-5",
};



const LoginForm = () => {
  
  const { connectors, connect, status, error } = useConnect({
    mutation:{
      onSuccess: () => router.push("/dashboard"),
    }
  })
  const account = useAccount()
  const {disconnect} = useDisconnect()
  const connector = connectors[0]
  const router = useRouter()

  
  
  return (
    <>
      <div
        className={styles.form}
      >
        {/* <div>{renderItems}</div> */}
        <Button disabled={status == "loading"} onClick={() => connect({connector})} type="submit">
          {status == "loading" && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          Login with {connector.name} : {account.status}
        </Button>
        {error && (
          <Alert variant="destructive" className="mt-5">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{(error as BaseError)?.shortMessage || error?.message}</AlertDescription>
          </Alert>
        )}
      </div>
    </>
  );
};

export default LoginForm;
