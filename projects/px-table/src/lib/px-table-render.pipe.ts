import {Injector, Pipe, PipeTransform, ProviderToken} from '@angular/core';
import {ComponentPipeArguments} from "./px-table";

@Pipe({
    name: 'pxTableRenderPipe',
    standalone: true
})
export class PxTableRenderPipePipe implements PipeTransform
{
    constructor(private injector: Injector) {}

    transform(value: unknown, pipeToken: ProviderToken<any>, args: ComponentPipeArguments): unknown
    {
        let pipeArgs: any[];
        if(!Array.isArray(args))
        {
            pipeArgs = [args]
        }
        else
        {
            pipeArgs = args;
        }

        return this.injector.get(pipeToken).transform(value, ...pipeArgs);
    }
}
