import { Injectable } from '@nestjs/common';
import {Contact} from '../entities/contact';
import { Repository, UpdateResult, DeleteResult} from  'typeorm';


@Injectable()
export class ContactService {
    constructor(
        private contactRepository: Repository<Contact>
    ) { }

    async create(contact: Contact): Promise<Contact> {
        return await this.contactRepository.save(contact);
    }

    async  readAll(): Promise<Contact[]> {
        return await this.contactRepository.find();
    }

    async update(contact: Contact): Promise<UpdateResult> {

        return await this.contactRepository.update(contact.id,contact);
    }

    async delete(id): Promise<DeleteResult> {
        return await this.contactRepository.delete(id);
    }
}
