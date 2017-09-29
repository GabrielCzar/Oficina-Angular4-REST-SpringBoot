package com.patrimonioapi.bootstrap;

import com.patrimonioapi.model.Item;
import com.patrimonioapi.repository.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationListener;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.stereotype.Component;

import java.time.LocalDate;

@Component
public class DevBootstrap implements ApplicationListener<ContextRefreshedEvent> {

	@Autowired
	private ItemRepository itemRepository;

    @Override
    public void onApplicationEvent(ContextRefreshedEvent contextRefreshedEvent) {
        initData();
    }

    private void initData () {
    	Item notebook = new Item ("NT0123", "Notebook i7", LocalDate.now());
    	Item carro = new Item ("AU9875", "Ford Fiesta", LocalDate.now());

    	itemRepository.save(notebook);
    	itemRepository.save(carro);
    }

}